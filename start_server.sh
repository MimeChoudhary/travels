#!/bin/bash
# Start web server for Anubhav Travels website
# This script starts a Python HTTP server on port 8000, accessible via 172.16.2.73

cd /home/ubuntu/travels

# Kill any existing server on port 8000
pkill -f "python3 -m http.server.*8000" 2>/dev/null
sleep 1

# Start the server on all interfaces (0.0.0.0) so it's accessible via 172.16.2.73
echo "Starting web server on port 8000..."
echo "Website will be accessible at: http://172.16.2.73:8000"
nohup python3 -m http.server 8000 --bind 0.0.0.0 > /tmp/webserver.log 2>&1 &

sleep 2

# Check if server started successfully
if ps aux | grep -q "[p]ython3 -m http.server.*8000"; then
    echo "✓ Web server started successfully!"
    echo "✓ Access the website at: http://172.16.2.73:8000"
    echo "✓ Server logs: /tmp/webserver.log"
else
    echo "✗ Failed to start web server. Check /tmp/webserver.log for errors."
    exit 1
fi

