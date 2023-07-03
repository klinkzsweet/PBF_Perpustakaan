<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use Illuminate\Http\Request;

class JadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jadwal = Jadwal::all();
        return response()->json([
            'success' => true,
            'message' => 'List Semua Jadwal',
            'data'    => $jadwal
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'hari' => 'required',
            'waktu' => 'required',
        ]);

        $jadwal = Jadwal::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Jadwal Telah Dibuat!!!',
            'data'    => $jadwal
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Jadwal $jadwal)
    {
        $jadwal = Jadwal::find($jadwal->id);
        return response()->json([
            'success' => true,
            'message' => 'Detail Buku',
            'data'    => $jadwal
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Jadwal $jadwal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Jadwal $jadwal)
    {
        $validated = $request->validate([
            'hari' => 'required',
            'waktu' => 'required',
        ]);

        $jadwal = Jadwal::whereId($jadwal->id)->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Jadwal Telah Diupdated!!!',
            'data'    => $jadwal
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Jadwal $jadwal)
    {
        $jadwal = Jadwal::findOrFail($jadwal->id);
        $jadwal->delete();

        return response()->json([
            'success' => true,
            'message' => 'Jadwal Telah Dihapus!!!',
            'data'    => $jadwal
        ], 204);
    }
}
