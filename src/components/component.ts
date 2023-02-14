export class Component {
  tierColors = {
    1: '#f7f781',
    2: '#bbe33d',
    3: '#b4c7dc',
    4: '#dddddd',
    5: '#ffdbb6',
    6: '#ffc2c2',
  } as const;

  init(): void {
    console.log('Hello from page init!');
    fetch('valheim-food.json')
      .then((response) => response.json())
      .then((__data) => this.app(__data));
  }

  app(data: any): void {
    console.log(data);
  }
}
