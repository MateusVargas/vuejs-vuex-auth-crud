<?php

namespace App\Http\Controllers\Api;

use Session;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
    	try {
    		$user = new User();
    		$user->name = $request->name;
    		$user->email = $request->email;
    		$user->password = Hash::make($request->password);
    		$user->save();

    		$success = true;
    		$message = 'User created';
    	} catch (\Exception $e) {
    		$success = false;
    		$message = $e->getMessage();
    	}

    	$response = [
    		'success' => $success,
    		'message' => $message
    	];
    	return response()->json($response);
    }

    public function login(Request $request){
    	$credentials = [
    		'email'=>$request->email,
    		'password'=>$request->password
    	];

    	if (Auth::attempt($credentials)) {
    		$success = true;
    		$message = 'User login successfully';
    	} else {
    		$success = false;
    		$message = 'invalid credentials';
    	}

    	$response = [
    		'success' => $success,
    		'message' => $message
    	];
    	return response()->json($response);
    }

    public function logout(){
    	try {
    		Session::flush();
    		$success = true;
    		$message = 'logout successfully';
    	} catch (\Exception $e) {
    		$success = false;
    		$message = $e->getMessage();
    	}

    	$response = [
    		'success' => $success,
    		'message' => $message
    	];
    	return response()->json($response);
    }
}
