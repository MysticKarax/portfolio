@echo off
echo Starting Chatbot Backend...
start cmd /k "cd /d C:\dev\python\proyectos\backend-chatbot && python app.py"

echo Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo Starting Vue Frontend...
start cmd /k "cd /d C:\dev\Vue\portfolio && npm run dev"

echo Both servers are starting!
echo Backend: http://127.0.0.1:5000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit...
pause > nul

