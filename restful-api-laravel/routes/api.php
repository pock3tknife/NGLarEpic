<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Get all employees
Route::get('employees', 'EmployeeController@getEmployee');

// Get Specic employee detail
Route::get('employee/{id}', 'EmployeeController@getEmployeeById');

// Add Employee
Route::post('addEmployee', 'EmployeeController@addEmployee');

// Update Employee
Route::put('updateEmployee/{id}', 'EmployeeController@updateEmployee');

// Delete Employee
Route::delete('deleteEmployee/{id}', 'EmployeeController@deleteEmployee');

Route::post('login', 'AuthController@login');
Route::post('signup', 'AuthController@signup');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');
Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
Route::post('resetPassword', 'ChangePasswordController@process');


