<?php

namespace App\Http\Controllers;

use App\Models\Pengunjung;
use Illuminate\Http\Request;

class PengunjungController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pengunjung = Pengunjung::all();
        return response()->json([
            'success' => true,
            'message' => 'List Semua Pengunjung',
            'data'    => $pengunjung
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
            'jeniskelamin' => 'required',
            'nohp' => 'required',
            'alamat' => 'required',
        ]);

        $pengunjung = Pengunjung::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Pengunjung Telah Dibuat!!!',
            'data'    => $pengunjung
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pengunjung $pengunjung)
    {
        $pengunjung = Pengunjung::find($pengunjung->id);
        return response()->json([
            'success' => true,
            'message' => 'Detail Buku',
            'data'    => $pengunjung
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
    public function update(Request $request, Pengunjung $pengunjung)
    {
        $validated = $request->validate([
            'nama' => 'required',
            'jeniskelamin' => 'required',
            'nohp' => 'required',
            'alamat' => 'required',
        ]);

        $pengunjung = Pengunjung::whereId($pengunjung->id)->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Pengunjung Telah Diupdated!!!',
            'data'    => $pengunjung
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pengunjung $pengunjung)
    {
        $pengunjung = Pengunjung::findOrFail($pengunjung->id);
        $pengunjung->delete();

        return response()->json([
            'success' => true,
            'message' => 'Pengunjung Telah Dihapus!!!',
            'data'    => $pengunjung
        ], 204);
    }
}
