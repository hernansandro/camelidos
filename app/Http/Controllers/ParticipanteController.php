<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\ParticipanteRequest;


use App\Services\ParticipanteService;

use Illuminate\Http\JsonResponse;

class ParticipanteController extends Controller
{
    protected ?ParticipanteService $feriaService = null;

    public function __construct(ParticipanteService $feriaService)
    {
        $this->feriaService = $feriaService;
    }

    public function index()
    {
        $projects = (new ParticipanteService())->getAll();

        return view('ferias.index', [
            'ferias' => $projects,
        ]);
    }

    public function list(ParticipanteRequest $request): JsonResponse
    {
        $ferias = $this->feriaService->getAll();

        return response()->json([
            'success' => true,
            'ferias' => $ferias,
            'message' => "Participantes retrieved successfully.",
        ]); // 200
    }

    public function store(ParticipanteRequest $request): JsonResponse
    {
        $this->feriaService->store($request->all());

        return response()->json([
            'success' => true,
            'message' => "Participante created successfully.",
        ], 201);
    }

    public function get(int $id): JsonResponse
    {
        $feria = $this->feriaService->getById($id);

        if ($feria) {
            return response()->json([
                'success' => true,
                'feria' => $feria,
                'message' => "Participante retrieved successfully.",
            ]); // 200
        } else {
            return response()->json([
                'success' => false,
                'message' => "Participante not found!",
            ], 404);
        }
    }

    public function update(ParticipanteRequest $request, int $id): JsonResponse
    {
        $this->feriaService->update($id, $request->all());

        return response()->json([
            'success' => true,
            'message' => "Participante updated successfully.",
        ], 201);
    }

    public function delete(ParticipanteRequest $request, int $id): JsonResponse
    {
        echo $id;
        echo "this is de id";
        $this->feriaService->delete($id);

        return response()->json([
            'success' => true,
            'message' => "Participante deleted successfully.",
        ], 201);
    }

    // public function reorder(ReorderParticipantesRequest $request): JsonResponse
    // {
    //     $this->taskService->reorder(
    //         $request->get('project_id'),
    //         $request->get('start'),
    //         $request->get('end')
    //     );

    //     return response()->json([
    //         'success' => true,
    //         'message' => "Participantes reordered successfully.",
    //     ], 201);
    // }
}
