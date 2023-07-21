<h1 align='center'>Chronous</h1>

<h2 align='center'>The project is still in the development</h2>

[![NPM version][npm-image]][npm-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: https://img.shields.io/npm/v/chronous.svg
[npm-url]: http://npmjs.org/package/chronous
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/chronous
[bundlephobia-url]: https://bundlephobia.com/result?p=chronous

<a href='https://midstem.net'>
  <img src='images/midstem.png' height='60'>
</a>

</br>

<h3>Installation</h3>

<b>npm</b>

```bash
$ npm install chronous
```

<b>yarn</b>

```bash
$ yarn add chronous
```

</br>

<h2><b>Usage</b></h2>

```jsx
import Chronous from 'chronous'

export const App = () => (
  <Chronous>
)
```

<h2>🔥 <a href='https://calendar.midstem.net'>Play around with Chronous</a></h2>

</br>

<h2><b>Browsers support</b></h2>

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari 
| --------- | --------- | --------- | --------- |
| IE11, Edge| last 3 versions| last 3 versions| last 3 versions

</br>

<h2><b>Props</b></h2>

<table width='100%'>
  <tr>
    <th><h3><b>Props</b></h3></th>
    <th><h3><b>Description</b></h3></th>
    <th><h3><b>Default</b></h3></th>
    <th><h3><b>Type</b></h3></th>
  </tr>
  <tr>
    <td>events</td>
    <td>List of events to be displayed on the calendar</td>
    <td>-</td>
    <td>{id: string; title: string; start: string; end: string; overlapping?: number; position?: string; number; width?: string; color?: string; textColor?: string; opacity?: number}[]</td>
  </tr>
  <tr>
    <td>view</td>
    <td>Specifies calendar view</td>
    <td><code>'Week'</code></td>
    <td>"Day" | "Week" | "Month"</td>
  </tr>
  <tr>
    <td>onClickEvent</td>
    <td>Function to handle click event on an event</td>
    <td>-</td>
    <td>(event: CellT) => void</td>
  </tr>
  <tr>
    <td>onClickCell</td>
    <td>Function to handle click event on a cell</td>
    <td>-</td>
    <td>(time: string, day: Date) => void</td>
  </tr>
  <tr>
    <td>onChangeDate</td>
    <td>Function to handle date change</td>
    <td>-</td>
    <td>(start: Date, end: Date) => void</td>
  </tr>
  <tr>
    <td>onChangeView</td>
    <td>Function to handle view change</td>
    <td>-</td>
    <td>(view: "Day" | "Week" | "Month") => void</td>
  </tr>
  <tr>
    <td>config</td>
    <td>Configuration array for the calendar view containers</td>
    <td>-</td>
    <td>{minWidth: number, view: "Day" | "Week" | "Month"}[]</td>
  </tr>
  <tr>
    <td>startHour</td>
    <td>Sets starting day hour</td>
    <td><code>1</code></td>
    <td>number</td>
  </tr>
  <tr>
    <td>endHour</td>
    <td>Sets ending day hour</td>
    <td><code>24</code></td>
    <td>number</td>
  </tr>
  <tr>
    <td>nextButton</td>
    <td>Sets custom arrow that gets you to the next day/week/month</td>
    <td><code>&lt;RightArrow color={colors.teal} /&gt;</code></td>
    <td>ReactNode</td>
  </tr>
  <tr>
    <td>prevButton</td>
    <td>Sets custom arrow that gets you to the previous day/week/month</td>
    <td><code>&lt;LeftArrow color={colors.teal} /&gt;</code></td>
    <td>ReactNode</td>
  </tr>
  <tr>
    <td>dropdownArrow</td>
    <td>Prop for custom dropdown arrow</td>
    <td><code>&lt;ChevronDown /&gt;</code></td>
    <td>ReactNode</td>
  </tr>
</table>

</br>


<h2>💅 <b>Styling</b></h2>

```css
.header-grid - styles the grid container that wraps header items. 
To change the order of the elements, edit this style: grid-template-areas: 'today arrows month year dropdown';

.today-button - styles the today button that gets a user to the current date

.selected-date - styles the selected day button

.dropdown-wrapper - styles the container that wraps dropdown

.dropdown-button - styles the dropdown button that toggles the display of the dropdown list

.dropdown-chevron - styles the dropdown arrow

.dropdown - styles the container that wraps dropdown items

.dropdown-item - styles the dropdown items

.row - styles the container that wraps cells

.cell - styles the container that wraps events

.time - styles the cell that contains time

.event - styles the container that wraps event

.modal-cross - styles the cross button in the modal with other events

.month-cell_mobile - styles the container that wraps events in the mobile view of the monthly calendar

.weekend - styles the weekends in the monthly calendar in the mobile view

.mobile--other-month - styles the date cells that do not belong to the current month in the mobile view

.dot - styles the  dot that represents the presence of events in the monthly calendar in the mobile view

.month-header-mobile - styles the container that wraps the header for the monthly calendar in the mobile view
```
