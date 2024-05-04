<?php

namespace Database\Seeders;
use App\Models\Feria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeriassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 3; $i++) {
            Feria::create([
                'id' => $i,
                'nombre' => "Feria $i",
                'fecha' => "2024-01-$i" ,
                'departamento' => 'Cochabamba'
            ]);
        }
    }
}
