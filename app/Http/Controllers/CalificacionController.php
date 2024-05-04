<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\CalificacionRequest;

use App\Services\CalificacionService;

use Illuminate\Http\JsonResponse;

class CalificacionController extends Controller
{
    protected ?CalificacionService $feriaService = null;

    public function __construct(CalificacionService $feriaService)
    {
        $this->feriaService = $feriaService;
    }

    public function index()
    {
        $projects = (new CalificacionService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(CalificacionRequest $request): JsonResponse
    {
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Calificacions retrieved successfully.",
        ]); // 200
    }

    public function store(CalificacionRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Calificacion created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
                'message' => "Calificacion retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Calificacion not found!",
            ], 404);
        }
    }

    public function update(CalificacionRequest $request, int $id): JsonResponse
    {
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Calificacion updated successfully.",
        ], 201);
    }

    public function delete(CalificacionRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Calificacion deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderCalificacionsRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Calificacions reordered successfully.",
    //     ], 201);
    // }
}
