window.fbAsyncInit = function () {
    FB.init({
      appId: 327855397302636,
      xfbml: true,
      version: 'v2.8'
    });
  };
  window.gapiCallback = function () {
    gapi.load('auth2', function () {
      window.googleAuth = gapi.auth2.init({
        client_id: '909540881369-n0acgq130phqtg02m2ufk6fkei6ponor.apps.googleusercontent.com'
      });
    });
  }