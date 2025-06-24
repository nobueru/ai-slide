// サイドバーリンク → iframe 切り替え
document.querySelectorAll('#sidebar nav a[data-src]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const viewer = document.getElementById('viewer');
      viewer.src = link.dataset.src;
  
      // active クラス切替え
      document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });
  