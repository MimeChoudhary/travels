# Website Hosting Setup

## Current Status
The website is now hosted and accessible at: **http://172.16.2.73:8000**

## Server Information
- **Port**: 8000
- **Binding**: 0.0.0.0 (all interfaces)
- **Server Type**: Python HTTP Server
- **Process**: Running in background

## Starting the Server
To start the web server, run:
```bash
/home/ubuntu/travels/start_server.sh
```

Or manually:
```bash
cd /home/ubuntu/travels
python3 -m http.server 8000 --bind 0.0.0.0 &
```

## Stopping the Server
To stop the web server:
```bash
pkill -f "python3 -m http.server.*8000"
```

## Checking Server Status
```bash
# Check if server is running
ps aux | grep "[p]ython3 -m http.server"

# Check port 8000
netstat -tlnp | grep ":8000" || ss -tlnp | grep ":8000"
```

## Accessing the Website
- **Local**: http://localhost:8000
- **Network**: http://172.16.2.73:8000
- **Main Page**: index.html

## Content Updates
The website content has been updated from the `fwdcontent` folder with:
- Enhanced About Us section
- Detailed service descriptions
- Updated contact information
- Additional services (Incentive Tours, Conferences)

## Notes
- The server runs on port 8000
- Make sure port 8000 is open in your firewall if accessing from external networks
- For production, consider using nginx or Apache as a reverse proxy
- Django components are also available but currently using static HTML hosting

