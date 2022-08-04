## ROS previewer for dataverse


list installed version

```bash
curl http://localhost:8080/api/admin/externalTools
```

delete old version

```bash
export TOOL_ID=1
curl -X DELETE  http://localhost:8080/api/admin/externalTools/$TOOL_ID
```
## curl command


```bash
curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \
'{
  "displayName":"Foxglove Studio Viewer",
  "description":"Foxglove Studio ROS bag viewer",
  "toolName":"ROSPreview",
  "scope":"file",
  "types":["preview", "explore"],
  "toolUrl":"https://tgoelles.github.io/dataverse_ros_previewer/v0.1/ROSPreview.html",
  "toolParameters": {
      "queryParameters":[
        {"fileid":"{fileId}"},
        {"siteUrl":"{siteUrl}"}
      ]
    },
  "contentType":"application/octet-stream"
}'
```
