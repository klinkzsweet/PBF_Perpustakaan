<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Petugas;
use Illuminate\Http\Request;

class PetugasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $petugas = Petugas::all();
        return response()->json([
            'success' => true,
            'message' => 'List Semua Petugas',
            'data'    => $petugas
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
            'nama' => 'required',
            'email' => 'required',
            'nohp' => 'required',
        ]);

        $petugas = Petugas::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Petugas Telah Dibuat!!!',
            'data'    => $petugas
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Petugas $petugas)
    {
        $petugas = Petugas::find($petugas->id);
        return response()->json([
            'success' => true,
            'message' => 'Detail Petugas',
            'data'    => $petugas
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Petugas $petugas)
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
    public function update(Request $request, Petugas $petugas)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'email' => 'required',
            'nohp' => 'required',
        ]);

        $petugas = Petugas::whereId($petugas->id)->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Petugas Telah Diupdated!!!',
            'data'    => $petugas
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Petugas $petugas)
    {
        $petugas = Petugas::findOrFail($petugas->id);
        $petugas->delete();

        return response()->json([
            'success' => true,
            'message' => 'Petugas Telah Dihapus!!!',
            'data'    => $petugas
        ], 204);
    }
}
