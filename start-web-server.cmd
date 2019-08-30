:: Start python web server to serve current directory on specified port
::     See also https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
py -m http.server 8000

if NOT ["%errorlevel%"]==["0"] (
    pause
    exit /b %errorlevel%
)