console.log('hi');

$('input.filepicker_field').change(function(e){
// function doc_upload(e) {
  console.log('4');
  var files = e.originalEvent.fpfiles;
  var deal_id = $("form#new_doc").attr('data-deal-id');
  for (var i =0; i < files.length; i++) {
    var data = {
      'filename': files[i]["filename"],
      'filepicker_slug': files[i]["url"],
      'deal_id': deal_id,
      's3_slug': files[i]["key"]
    };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/docs",
      data: data,
      dataType: 'json',
      success: function( response, status, xhr )
      {
        //add document_id to field
        // var current_value = $('input#new_documents').val();
        // $('input#new_documents').val(current_value + response.document + " ");

        // needs document_id / contractor id
        $('#files_uploaded').append("<div class='document space1' data-document-id='"+response.document+"'><img src='"+response.cloudfront_slug +"/convert?w=40&h=40&fit=crop&quality=50' class='tiny' /><div class='btn-delete-file not-bound'><span class='glyphicon glyphicon-trash'></span></div></div>");

        $('.btn-delete-file.not-bound').bind("click", function(e){

          var deal_id = $(this).parents(".document").attr('data-deal-id');
          var document_id = $(this).parents(".document").attr('data-document-id');
          // console.log(document_id);
          that.delete_file($(this), 'deal', deal_id, document_id);

        }).removeClass("not-bound");
      }
    });
  }
});