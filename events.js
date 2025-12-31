const changeHeading = () => {
    const heading = document.getElementById('heading')
    heading.textContent = 'Heading Changed!'
}

const changeHeading2 = () => {
    const heading2 = document.getElementById('heading2')
    heading2.textContent = 'Heading 2 Changed!'
}

const btn = document.getElementById('changeHeadingBtn')
// btn.onclick = changeHeading2
btn.addEventListener('click', changeHeading2)