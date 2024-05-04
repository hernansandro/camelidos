<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\ConcursoRequest;


use App\Services\ConcursoService;

use Illuminate\Http\JsonResponse;

class ConcursoController extends Controller
{
    protected ?ConcursoService $feriaService = null;

    public function __construct(ConcursoService $feriaService)
    {
        $this->feriaService = $feriaService;
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
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Concursos retrieved successfully.",
        ]); // 200
    }

    public function store(ConcursoRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Concurso created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
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
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Concurso updated successfully.",
        ], 201);
    }

    public function delete(ConcursoRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

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
