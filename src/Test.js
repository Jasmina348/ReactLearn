import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        return (
            <div>
                <input name="about" type="hidden" />
                <div id="editor-container">
                    <p>A robot who has developed sentience, and is the only robot of his kind shown to be still functioning on Earth.</p>
                </div>
                <div class="row">
                    <button class="btn btn-primary" type="submit">Save Profile</button>
                </div>
            </div>
        )
    }
}
var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link', 'blockquote', 'code-block', 'image'],
        [{ list: 'ordered' }, { list: 'bullet' }]
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  });
  
  var form = document.querySelector('form');
  form.onsubmit = function() {
    // Populate hidden form on submit
    var about = document.querySelector('input[name=about]');
    about.value = JSON.stringify(quill.getContents());
    
    console.log("Submitted", $(form).serialize(), $(form).serializeArray());
    
    // No back end to actually submit to!
    alert('Open the console to see the submit data!')
    return false;
  };
  