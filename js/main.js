/* ============================================
   Hewett.cc - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Blog Post Listing (auto-load from JSON) ---
  const postList = document.querySelector('.post-list');

  if (postList) {
    fetch('/posts/posts.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (posts) {
        // Sort by date (newest first)
        posts.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });

        postList.innerHTML = '';

        posts.forEach(function (post) {
          var li = document.createElement('li');
          li.className = 'post-item';

          var formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          li.innerHTML =
            '<h2 class="post-title"><a href="/posts/' + post.slug + '.html">' + escapeHtml(post.title) + '</a></h2>' +
            '<p class="post-date">' + formattedDate + '</p>' +
            (post.excerpt ? '<p class="post-excerpt">' + escapeHtml(post.excerpt) + '</p>' : '');

          postList.appendChild(li);
        });
      })
      .catch(function () {
        // If JSON fails to load, show a message
        postList.innerHTML = '<li class="post-item"><p>No blog posts found.</p></li>';
      });
  }

});

// --- Utility: Escape HTML ---
function escapeHtml(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}
