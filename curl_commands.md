# Example Curl Commands to register previewers for Dataverse, version 5.2+

You should be able to cut/paste any/all of the commands below to run on your Dataverse machine:




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
        {"siteUrl":"{siteUrl}"},
        {"key":"{apiToken}"},
        {"datasetid":"{datasetId}"},
        {"datasetversion":"{datasetVersion}"},
        {"locale":"{localeCode}"}
      ]
    },
  "contentType":"application/octet-stream"
}'
```
