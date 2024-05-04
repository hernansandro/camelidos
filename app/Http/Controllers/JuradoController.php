<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\JuradoRequest;


use App\Services\JuradoService;

use Illuminate\Http\JsonResponse;

class JuradoController extends Controller
{
    protected ?JuradoService $feriaService = null;

    public function __construct(JuradoService $feriaService)
    {
        $this->feriaService = $feriaService;
    }

    public function index()
    {
        $projects = (new JuradoService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(JuradoRequest $request): JsonResponse
    {
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Jurados retrieved successfully.",
        ]); // 200
    }

    public function store(JuradoRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Jurado created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
                'message' => "Jurado retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Jurado not found!",
            ], 404);
        }
    }

    public function update(JuradoRequest $request, int $id): JsonResponse
    {
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Jurado updated successfully.",
        ], 201);
    }

    public function delete(JuradoRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Jurado deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderJuradosRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Jurados reordered successfully.",
    //     ], 201);
    // }
}
