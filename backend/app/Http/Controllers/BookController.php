<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $book = Book::all();
        return response()->json([
            'success' => true,
            'message' => 'List Semua Book',
            'data'    => $book
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
            'judul' => 'required',
            'penulis' => 'required',
            'tahun' => 'required',
        ]);

        $book = Book::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Buku Telah Dibuat!!!',
            'data'    => $book
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        $book = Book::find($book->id);
            return response()->json([
                'success' => true,
                'message' => 'Detail Buku',
                'data'    => $book
            ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $book
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'judul' => 'required',
            'penulis' => 'required',
            'tahun' => 'required',
        ]);

        $book = Book::whereId($book->id)->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Buku Telah Diupdated!!!',
            'data'    => $book
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book = Book::findOrFail($book->id);
        $book->delete();

        return response()->json([
            'success' => true,
            'message' => 'Buku Telah Dihapus!!!',
            'data'    => $book
        ], 204);
    }
}
