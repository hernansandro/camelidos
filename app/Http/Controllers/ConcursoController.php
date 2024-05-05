<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\ConcursoRequest;


use App\Services\ConcursoService;

use Illuminate\Http\JsonResponse;

class ConcursoController extends Controller
{
    protected ?ConcursoService $concursoService = null;

    public function __construct(ConcursoService $concursoService)
    {
        $this->concursoService = $concursoService;
    }

    public function index()
    {
        $projects = (new ConcursoService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(ConcursoRequest $request): JsonResponse
    {
        $concursos = $this->concursoService->getAll();

        return response()->json([
            'success' => true,
            'concursos' => $concursos,
            'message' => "Concursos retrieved successfully.",
        ]); // 200
    }

    public function store(ConcursoRequest $request): JsonResponse
    {
        $this->concursoService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Concurso created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $concurso = $this->concursoService->getById($id);

        if ($concurso) {
            return response()->json([
                'success' => true,
                'concurso' => $concurso,
                'message' => "Concurso retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Concurso not found!",
            ], 404);
        }
    }

    public function update(ConcursoRequest $request, int $id): JsonResponse
    {
        $this->concursoService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Concurso updated successfully.",
        ], 201);
    }

    public function delete(ConcursoRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->concursoService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Concurso deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderConcursosRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Concursos reordered successfully.",
    //     ], 201);
    // }
}
