
$(document).ready(function () {
    startPreview(false);
});


function writeContent(fileUrl, file, title, authors) {
    addStandardPreviewHeader(file, title, authors);

    //$('.preview').append("<a href=\"https://studio.foxglove.dev/?ds=ros1-remote-bagfile&ds.url=https%3A%2F%2Fgithub.com%2Fvirtual-vehicle%2Fpointcloudset%2Fraw%2Fmaster%2Ftests%2Ftestdata%2Ftest.bag&layoutId=d8890d0c-1e3a-4730-9d62-f1e40f51e8e1\">Foxglove test</a>")
    //$('.preview').append($("<a href=\https://studio.foxglove.dev/?ds=ros1-remote-bagfile&ds.url=" + fileUrl + "&layoutId=d8890d0c-1e3a-4730-9d62-f1e40f51e8e1\">Foxglove test</a>"))
    $('.preview').append($(fileUrl))
}

