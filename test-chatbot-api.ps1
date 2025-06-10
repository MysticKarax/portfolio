# Test script for chatbot API
Write-Host "Testing Chatbot API..." -ForegroundColor Green

try {
    $response = Invoke-RestMethod -Uri "http://127.0.0.1:5000/predict" -Method Post -ContentType "application/json" -Body '{"message":"hello"}'
    Write-Host "✅ API Test Successful!" -ForegroundColor Green
    Write-Host "Response: $($response.answer)" -ForegroundColor Cyan
} catch {
    Write-Host "❌ API Test Failed!" -ForegroundColor Red
    Write-Host "Make sure the Flask server is running on http://127.0.0.1:5000" -ForegroundColor Yellow
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Write-Host "To start the servers, run: start-with-chatbot.bat" -ForegroundColor Yellow

