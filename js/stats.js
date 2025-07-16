  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / 100;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        // Format as 'k' if target >= 1000
        if (target >= 1000) {
          counter.textContent = Math.floor(count / 1000) + 'k';
        } else {
          counter.textContent = Math.floor(count);
        }
        setTimeout(updateCount, 20);
      } else {
        // Ensure final value is set
        if (target >= 1000) {
          counter.textContent = Math.floor(target / 1000) + 'k';
        } else {
          counter.textContent = Math.floor(target);
        }
      }
    };

    updateCount();
  });
