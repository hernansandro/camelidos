<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\Feria\CreateFeriaRequest;
use App\Http\Requests\Feria\UpdateFeriaRequest;
use App\Http\Requests\Feria\DeleteFeriaRequest;
use App\Http\Requests\Feria\ListFeriaRequest;

use App\Services\FeriaService;

use Illuminate\Http\JsonResponse;

class FeriaController extends Controller
{
    protected ?FeriaService $feriaService = null;

    public function __construct(FeriaService $feriaService)
    {
        $this->feriaService = $feriaService;
    }

    public function index()
    {
        $projects = (new FeriaService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(ListFeriaRequest $request): JsonResponse
    {
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Ferias retrieved successfully.",
        ]); // 200
    }

    public function store(CreateFeriaRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Feria created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
                'message' => "Feria retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Feria not found!",
            ], 404);
        }
    }

    public function update(UpdateFeriaRequest $request, int $id): JsonResponse
    {
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Feria updated successfully.",
        ], 201);
    }

    public function delete(DeleteFeriaRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Feria deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderFeriasRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Ferias reordered successfully.",
    //     ], 201);
    // }
}
