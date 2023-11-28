const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function result() {
  let finalStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  finalStory = finalStory.replaceAll(":insertx:", xItem).replaceAll(":inserty:", yItem).replaceAll(":insertz:", zItem);

  if (customName.value !== '') {
    const name = customName.value;
    finalStory = finalStory.replaceAll("Bob", name);
  }

  const ukCheckbox = document.getElementById("uk");
  if (ukCheckbox && ukCheckbox.checked) {
    const weight = Math.round(300 / 14) + ' kilogram';
    const temperature = Math.round((94 - 32) * (5 / 9)) + ' Celsius';
    finalStory = finalStory.replaceAll("94 fahrenheit", temperature);
    finalStory = finalStory.replaceAll("300 pounds", weight);
  }

  story.textContent = finalStory;
  story.style.visibility = 'visible';
}
