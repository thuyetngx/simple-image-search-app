# 0.0.1 (2021-05-02)

### Features

* **Pages Support:** Home Page / Search Page
* **Lazyload Image:** Support lazyload image use app-image
* **Virtual Scroll:** Support displays a virtual, "infinite" list images use ngx-virtual-scroller.
* **Load More:** Support user scroll down to see more images. Currently, i added a config <code>max_page</code> in environment file (default 5) for easy review & testing. But the <code>max_page</code> should be equals with <code>total</code> from api response
* **Responsive :** The pages support responsive on different browsers (Chrome | Edge | Firefox)
* **Authentication :** Basic Login and Authentication Workflows
* **Unit Test :** TBD, support only one test case for run e2e tests using [Protractor]
