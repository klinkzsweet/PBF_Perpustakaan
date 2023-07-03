<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PengunjungSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pengunjungs')->insert([
            [
                "nama" => "santi",
                "jeniskelamin" => "perempuan",
                "nohp" => "081290117845",
                "alamat" => "jln mangga",
            ]
        ]);
    }
}
