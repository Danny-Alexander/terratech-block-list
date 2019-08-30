:: Starts python web server to serve parent directory on specified port
::     See also https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
cd ..
py -m http.server 8000

:: Don't auto-close the window when problems are encountered
if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)