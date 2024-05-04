<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\CreatePremioRequest;

use App\Services\PremioService;

use Illuminate\Http\JsonResponse;

class PremioController extends Controller
{
    protected ?PremioService $feriaService = null;

    public function __construct(PremioService $feriaService)
    {
        $this->feriaService = $feriaService;
    }

    public function index()
    {
        $projects = (new PremioService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(PremioRequest $request): JsonResponse
    {
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Premios retrieved successfully.",
        ]); // 200
    }

    public function store(PremioRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Premio created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
                'message' => "Premio retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Premio not found!",
            ], 404);
        }
    }

    public function update(PremioRequest $request, int $id): JsonResponse
    {
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Premio updated successfully.",
        ], 201);
    }

    public function delete(PremioRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Premio deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderPremiosRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Premios reordered successfully.",
    //     ], 201);
    // }
}
