import { test} from 'vitest'
import { render,screen} from "@testing-library/react";
import App from "./App"
import userEvent from "@testing-library/user-event";


test("check plus button",async ()=>{
    render(<App/>)
    await userEvent.click(screen.getByTestId("add-button"))
    expect(screen.getByTestId("counter").textContent).toMatch("count : 1")
})

test("check reset button",async ()=>{
    render(<App/>)
    await userEvent.click(screen.getByTestId("reset-button"))
    expect(screen.getByTestId("counter").textContent).toMatch("count : 0")
})

test("check min button",async ()=>{
    render(<App/>)
    await userEvent.click(screen.getByTestId("min-button"))
    expect(screen.getByTestId("counter").textContent).toMatch("count : -1")
})
