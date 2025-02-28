![restAPI](restAPI.png)

## Create a meeting

Create a meeting with a `HTTP request` containing the `API_KEY` sent to MiroTalk’s server. The response contains a `meeting` URL that can be `embedded` in your client within an `iframe`.

```bash
# js
node meeting.js
node join.js

# php
php meeting.php
php join.php

# python
python3 meeting.py
python3 join.py

# bash
./meeting.sh
./join.sh
```

## Embed a meeting

Embedding a meeting into a `service` or `app` requires using an `iframe` with the `src` attribute specified as the `meeting` from `HTTP response`.

```html
<iframe
    allow="camera; microphone; fullscreen; display-capture; autoplay"
    src="https://localhost:3010/join/room_name"
    style="height: 100%; width: 100%; border: 0px;"
></iframe>
```

## Fast Integration

Develop your `website` or `application`, and bring `video meetings` in with a simple `iframe`.

```html
<iframe
    allow="camera; microphone; fullscreen; display-capture; autoplay"
    src="https://localhost:3010/newroom"
    style="height: 100%; width: 100%; border: 0px;"
></iframe>
```
