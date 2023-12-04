/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "docs": [
    "index",
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Quickstarts",
      "items": [
        {
          type: 'category',
          "collapsible": true,
          "collapsed": true,
          "label": "Demo/Lab Setups",
          "items": [
            {
              type: 'autogenerated',
              dirName: 'demo_setup'
            }
          ]
        },
        {
          type: 'autogenerated',
          dirName: 'quickstart',
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Concepts & Best Practices",
      "items": [
        {
          type: 'autogenerated',
          dirName: 'concepts',
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Components Used",
      "items": [
        {
          type: 'autogenerated',
          dirName: 'components',
        }
      ]
    },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "3rd Party Integrations",
      "items": [
        {
          type: 'autogenerated',
          dirName: 'integrations',
        }
      ]
    },
    // {
    //   "type": "category",
    //   "collapsible": true,
    //   "collapsed": true,
    //   "label": "Product Documentation",
    //   "items": [
    //   ]
    // },
    {
      "type": "category",
      "collapsible": true,
      "collapsed": true,
      "label": "Miscellaneous",
      "items": [
        {
          type: 'autogenerated',
          dirName: 'misc',
        }
      ]
    },
  ],
  "atip": [
    {
      type: 'autogenerated',
      dirName: 'product/atip',
    }

  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
