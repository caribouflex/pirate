import {
  selectAllCommentsId,
  selectCommentParent,
  selectStories,
  selectSelectedStoryId,
  selectStoryLoading,
  selectCommentsOpen
} from "..";

describe("Redux selectors", () => {
  const state = {
    stories: {
      allIds: [
        19634987,
        19634947,
        19632449,
        19635410,
        19632900,
        19636068,
        19632052,
        19634570,
        19633131,
        19634237,
        19633579
      ],
      byId: {
        19632052: {
          by: "signa11",
          descendants: 20,
          id: 19632052,
          kids: [
            19633358,
            19632423,
            19634213,
            19632885,
            19633611,
            19633598,
            19633940,
            19632626
          ],
          score: 233,
          time: 1554970600,
          title: "Random Forests for Complete Beginners",
          type: "story",
          url: "https://victorzhou.com/blog/intro-to-random-forests/"
        },
        19632449: {
          by: "kragniz",
          descendants: 891,
          id: 19632449,
          kids: [19632670, 19633803, 19632509, 19633784, 19632819, 19632471],
          score: 1642,
          time: 1554975476,
          title: "Julian Assange arrested in London",
          type: "story",
          url: "https://www.bbc.co.uk/news/uk-47891737"
        },
        19632900: {
          by: "signa11",
          descendants: 39,
          id: 19632900,
          kids: [19633669, 19634115, 19634381, 19633759, 19633568],
          score: 139,
          time: 1554979598,
          title: "Lvalues, rvalues, glvalues, prvalues, xvalues, help (2018)",
          type: "story",
          url:
            "https://blog.knatten.org/2018/03/09/lvalues-rvalues-glvalues-prvalues-xvalues-help/"
        },
        19633131: {
          by: "tooba",
          descendants: 71,
          id: 19633131,
          kids: [19633810, 19635149, 19635167, 19634795, 19635972, 19635233],
          score: 93,
          time: 1554981843,
          title: "Google Wing will deliver to about 100 homes in Canberra",
          type: "story",
          url: "https://www.bbc.co.uk/news/technology-47880288"
        },
        19634237: {
          by: "sohkamyung",
          descendants: 12,
          id: 19634237,
          kids: [19634969, 19635244, 19635625, 19635176],
          score: 72,
          time: 1554989220,
          title:
            "Firefox Beta for Windows 10 on Qualcomm Snapdragon Now Available",
          type: "story",
          url:
            "https://blog.mozilla.org/futurereleases/2019/04/11/firefox-beta-for-windows-10-on-qualcomm-snapdragon-always-connected-pcs-now-available/"
        },
        19634570: {
          by: "headalgorithm",
          descendants: 13,
          id: 19634570,
          kids: [
            19635455,
            19635161,
            19635231,
            19636101,
            19635253,
            19635764,
            19635219,
            19635963,
            19635272
          ],
          score: 122,
          time: 1554991115,
          title:
            "A private spacecraft from Israel will attempt a moon landing Thursday",
          type: "story",
          url:
            "https://arstechnica.com/science/2019/04/a-private-spacecraft-from-israel-will-attempt-a-moon-landing-thursday/"
        },
        19634947: {
          by: "RmDen",
          descendants: 48,
          id: 19634947,
          kids: [
            19635423,
            19635225,
            19636143,
            19635534,
            19636163,
            19635692,
            19635290
          ],
          score: 102,
          time: 1554993541,
          title:
            "Pentagon names Microsoft and Amazon as $10B cloud contract finalists",
          type: "story",
          url:
            "https://techcrunch.com/2019/04/11/much-to-oracles-chagrin-pentagon-names-microsoft-and-amazon-as-10b-jedi-cloud-contract-finalists/"
        },
        "19634987": {
          by: "cienega",
          descendants: 147,
          id: 19634987,
          kids: [19635626, 19636203, 19635357, 19635241, 19635279],
          score: 238,
          time: 1554993861,
          title:
            "Cambridge Becomes First U.S. City to Require Protected Bike Lanes",
          type: "story",
          url:
            "https://www.citylab.com/transportation/2019/04/protected-bike-lanes-traffic-safety-cambridge-bicycle-plan/586876/"
        },
        19635410: {
          by: "hhs",
          descendants: 2,
          id: 19635410,
          kids: [19635945],
          score: 23,
          time: 1554995959,
          title:
            "Facebook showed me my data is everywhere and I have absolute no control over it",
          type: "story",
          url:
            "https://www.buzzfeednews.com/article/katienotopoulos/facebook-advertisers-data-brokers-car-dealerships"
        },
        19636068: {
          by: "bushido",
          descendants: 0,
          id: 19636068,
          score: 6,
          time: 1554998914,
          title: "Sensors Linked to Boeing 737 Crashes Vulnerable to Failure",
          type: "story",
          url:
            "https://www.bloomberg.com/news/articles/2019-04-11/sensors-linked-to-737-crashes-vulnerable-to-failure-data-show"
        }
      },
      loading: false,
      selectedStoryId: 19632052,
      errorMessage: null
    },
    comments: {
      byId: {
        19632052: {
          childrens: {
            19632423: {
              by: "djaychela",
              id: 19632423,
              kids: [19633366, 19633561, 19632911],
              parent: 19632052,
              text:
                "I&#x27;ve started studying ML (as someone who&#x27;s hoping to transition at 47 to a different career from teaching and music), and some concepts I&#x27;ve found easy to get, others not so much (I&#x27;m old, so give me a break!).  Often I need to have a concept explained in a different manner before I&#x27;ll have a &#x27;Oh, I see!&#x27; moment, and because I don&#x27;t have a great grasp on the maths needed (which I&#x27;m working on, but it&#x27;s s-l-o-w), as soon as equations I can&#x27;t get appear, I tend to lose focus and think I can&#x27;t do it.<p>This post covers things that I&#x27;ve seen in the past, and seems to sum up my internal understanding of the concept, which is good for me as reading through it I had a number of &#x27;see, I do get it&#x27; moments.  The only criticism I have of it is that it seems to gloss over what differences the trees within the random forest have - as I understand it, they are all slightly different, and this gives them greater accuracy?<p>Anyway, thanks for posting it - I&#x27;ll read the other posts when I get a chance.",
              time: 1554975283,
              type: "comment"
            },
            19632626: {
              deleted: true,
              id: 19632626,
              parent: 19632052,
              time: 1554977028,
              type: "comment"
            },
            19632885: {
              by: "techno_modus",
              id: 19632885,
              parent: 19632052,
              text:
                "Most of the post (~80%) is actually about decision trees: principles, how to train, choosing splits etc.",
              time: 1554979468,
              type: "comment"
            },
            19633358: {
              by: "anthony_doan",
              id: 19633358,
              kids: [19634183, 19633594],
              parent: 19632052,
              text:
                "My thesis is related to trees, forests, and ensemble of forests.<p>This is pretty concise but mostly for decision tree but only half of it.<p>CART is the framework for decision tree for classification and regression. This article only addresses the Classification part which usually use Gini which is a class of split that split along parallel axises (there are oblique trees). The regression part uses more traditional statistical linear regression to calculate split point (SSTO).<p>Very light on Random Forests though, doesn&#x27;t talk about out of bagging, implication of bootstrap and ordinal data, etc.. but overall I think it&#x27;s a neat introduction.<p>&gt; we only try a subset of the features,<p>You bootstrap features without replacement at every split. Instead of just bootstrapping rows&#x2F;observations like in bagging.<p>The concept of weak learners ensemble together to become a strong learner is done by Dr. Ho work under her paper Random Subspace where she does it with decision tree and basically proposed Random Forest before Dr. Leo Breiman (both independently came to Random Forest). Her advisor have the theoretical paper for proof of weak learner, stocastic discrimination.",
              time: 1554983610,
              type: "comment"
            },
            19633598: {
              by: "chaosbutters",
              id: 19633598,
              parent: 19632052,
              text:
                "this is actually a really good explanation because it shows in simple pictures and words the concepts so there is no confusion. Well done.",
              time: 1554985091,
              type: "comment"
            },
            19633611: {
              by: "b_tterc_p",
              id: 19633611,
              kids: [19635648, 19633728, 19635103],
              parent: 19632052,
              text:
                "While there’s nothing wrong with random forests, they’re a bit of a red flag for me as they’re easy to implement without any real understanding of what’s going on. A lot of junior data scientists just default to saying random forest to solve any problem because it tends to have the most predictive power of the models they’re comfortable with. That’s a bad sign.",
              time: 1554985160,
              type: "comment"
            },
            19633940: {
              by: "queercode",
              id: 19633940,
              parent: 19632052,
              text:
                "Thanks for posting this - from a fellow HH member who saw this yesterday!",
              time: 1554987428,
              type: "comment"
            },
            19634213: {
              by: "vzhou842",
              id: 19634213,
              parent: 19632052,
              text:
                'Hey, Author here. If you&#x27;re new to ML you might also like my introduction to Neural Networks: <a href="https:&#x2F;&#x2F;victorzhou.com&#x2F;blog&#x2F;intro-to-neural-networks&#x2F;" rel="nofollow">https:&#x2F;&#x2F;victorzhou.com&#x2F;blog&#x2F;intro-to-neural-networks&#x2F;</a><p>Discussion of my neural networks post on HN: <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=19320217" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=19320217</a>',
              time: 1554989067,
              type: "comment"
            }
          },
          parent: -1
        }
      },
      allIds: [19632052],
      loading: false,
      selectedId: 19632052,
      errorMessage: null
    }
  };

  it("Should return comments ID", () => {
    expect(selectAllCommentsId(state)).toEqual([19632052]);
  });

  it("Should return comment parent", () => {
    expect(selectCommentParent(state)).toEqual(-1);
  });

  it("Should return stories", () => {
    expect(selectStories(state)).toEqual(state.stories.byId);
  });

  it("Should return selected story id", () => {
    expect(selectSelectedStoryId(state)).toEqual(19632052);
  });

  it("Should return the loading status of the stories", () => {
    expect(selectStoryLoading(state)).toEqual(state.stories.loading);
  });

  it("Should return the comments tab open status", () => {
    expect(selectCommentsOpen(state)).toEqual(true);
  });
});
