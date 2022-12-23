import {mount} from "@vue/test-utils";
import {expect, test} from "vitest";
import IndexPage from "@renderer/views/pages/IndexPage.vue";

test("IndexPage component", async () => {
    expect(IndexPage).toBeTruthy();

    const wrapper = mount(IndexPage, {});

    expect(wrapper.text()).toContain("Hello, world!");
});
