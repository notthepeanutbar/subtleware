(function() {
  const startDate = new Date('2025-05-23'); // Adjusted start date
  const now = new Date();
  const diffInTime = now.getTime() - startDate.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
  const maxDays = 30;

  if (diffInDays < maxDays) {
    const opacity = Math.max(0, 1 - (diffInDays / maxDays));
    document.documentElement.style.opacity = opacity.toFixed(2);
  } else {
    document.body.innerHTML = `
      <div style="font-family:sans-serif;text-align:center;padding:5rem;color:#222">
        <h1>This website has faded due to an unpaid invoice.</h1>
        <p>To restore access, please settle your outstanding balance.</p>
        <p>For questions or assistance, contact your developer.</p>
      </div>
    `;
  }
})();
