<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PetugasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('petugass')->insert([
            [
                "nama" => "yanto",
                "email" => "yanto@gmail.com",
                "nohp" => "082190882213",
            ]
        ]);
    }
}
