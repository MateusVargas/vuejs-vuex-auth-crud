<?php

namespace App\Http\Controllers\Api;

use App\Models\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(){
    	$books = Book::all()->toArray();
    	return array_reverse($books);
    }

    public function store(Request $request){
    	$book = new Book([
    		'name'=>$request->name,
    		'author'=>$request->author
    	]);
    	$book->save();
    	return response()->json('book save successfully');
    }

    public function edit($id){
    	$book = Book::find($id);
    	return response()->json($book);
    }

    public function update($id, Request $request){
    	$book = Book::find($id);
    	$book->update($request->all());
    	return response()->json('book updated successfully');
    }

    public function delete($id){
    	$book = Book::find($id);
    	$book->delete();
    	return response()->json('book deleted successfully');
    }
}
