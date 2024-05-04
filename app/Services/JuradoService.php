<?php

namespace App\Services;

use App\Models\Jurado;
use Illuminate\Database\Eloquent\Collection;

class JuradoService
{
    public function getAll(): Collection
    {
        return Jurado::all();
    }

    public function list(int $projectId)
    {
        return Jurado::with('project')->where('project_id', $projectId)
            ->orderBy('priority')->get();
    }

    public function getById(int $id)
    {
        return Jurado::where('id', $id)->first();
    }

    public function store($data): void
    {
        //$count = Jurado::where('project_id', $data['project_id'])->count();
        //$data['priority'] = $count + 1;

        Jurado::create($data);
    }

    public function update(int $id, array $data): void
    {
        $feria = $this->getById($id);
        if (!$feria) { return; }

        $feria->update($data);
    }

    public function delete(int $id): void
    {
        $feria = $this->getById($id);
        if (!$feria) { return; }
        
        $feria->delete();

        
    }

    public function reorder(int $project_id, int $start, int $end): void
    {
        $items = Jurado::where('project_id', $project_id)
            ->orderBy('priority')->pluck('priority', 'id')->toArray();

        if ($start > count($items) || $end > count($items)) {
            return;
        }

        $ids = [];
        $priorities = [];
        foreach ($items as $id => $priority) {
            $ids[] = $id;
            $priorities[] = $priority;
        }

        $out_priority = array_splice($priorities, $start - 1, 1);
        array_splice($priorities, $end - 1, 0, $out_priority);

        $when_then = "";
        $where_in = "";
        foreach ($priorities as $out_k => $out_v) {
            $id = $ids[$out_v - 1];
            $when_then .= "WHEN ".$id." THEN ".($out_k + 1)." ";
            $where_in .= $id.",";
        }

        $table_name = (new Jurado())->getTable();
        $bulk_update_query = "UPDATE `".$table_name
            ."` SET `priority` = (CASE `id` ".$when_then."END)"
            ." WHERE `id` IN(".substr($where_in, 0, -1).")"
            ." AND `deleted_at` IS NULL;"; // soft delete

        DB::update($bulk_update_query);
    }
}