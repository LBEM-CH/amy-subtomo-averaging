document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('pre').forEach(function (pre) {
    var wrapper = document.createElement('div');
    wrapper.className = 'copy-btn-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    var code = pre.querySelector('code');
    var target = code || pre;

    var group = document.createElement('div');
    group.className = 'code-btn-group';
    wrapper.appendChild(group);

    var editBtn = document.createElement('button');
    editBtn.className = 'code-btn edit-btn';
    editBtn.textContent = 'Edit';
    group.appendChild(editBtn);

    var copyBtn = document.createElement('button');
    copyBtn.className = 'code-btn copy-btn';
    copyBtn.textContent = 'Copy';
    group.appendChild(copyBtn);

    editBtn.addEventListener('click', function () {
      var editing = target.getAttribute('contenteditable') === 'true';
      if (editing) {
        target.setAttribute('contenteditable', 'false');
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('editing');
        group.classList.remove('editing');
      } else {
        target.setAttribute('contenteditable', 'true');
        target.focus();
        editBtn.textContent = 'Done';
        editBtn.classList.add('editing');
        group.classList.add('editing');
      }
    });

    copyBtn.addEventListener('click', function () {
      var text = target.innerText.trimEnd();
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
  });
});
