import { test} from 'vitest'
import { render } from "@testing-library/react";
import App from "./App"

test("check title render",()=>{
    render(App())
})
