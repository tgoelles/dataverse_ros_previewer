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

## Info

https://github.com/GlobalDataverseCommunityConsortium/dataverse-previewers/wiki/How-to-create-a-previewer

https://guides.dataverse.org/en/5.11/api/external-tools.html?highlight=previewer

The previewer needs to be a web app

### Architecture


 https://studio.foxglove.dev

foxglove url format:
https://studio.foxglove.dev/?ds=ros1-remote-bagfile&ds.url=https%3A%2F%2Fgithub.com%2Fvirtual-vehicle%2Fpointcloudset%2Fraw%2Fmaster%2Ftests%2Ftestdata%2Ftest.bag&layoutId=d8890d0c-1e3a-4730-9d62-f1e40f51e8e1



CORS needs to be setup for foxglove or webviz. Should be there in Dataverse


### Developer notes

* the curl command above needs to run only once
* on push you need to wait for the github action to finish building the html side to see the effects
* it depends on the js, css files from https://qualitativedatarepository.github.io/