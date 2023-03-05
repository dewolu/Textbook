fetch('/textbook-data')
  .then(response => response.json())
  .then(data => {
    const featuredList = document.querySelector('#featured-list');
    const textbookList7th = document.querySelector('#textbook-list-7th');
    const textbookList8th = document.querySelector('#textbook-list-8th');
    const textbookList9th = document.querySelector('#textbook-list-9th');
    const textbookList10th = document.querySelector('#textbook-list-10th');
  });

    data.featuredTextbooks.forEach(textbook => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#">${textbook.title}</a> <a href="#" class="download-link">Download</a>`;
      featuredList.appendChild(li);
    });

    data.textbooks7th.forEach(textbook => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#">${textbook.title}</a> <a href="#" class="download-link">Download</a>`;
      textbookList7th.appendChild(li);
    });

    data.textbooks8th.forEach(textbook => {
      const li = document
    });
