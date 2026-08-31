---
title: 'Same word, different meaning'
description: 'Every speaker points a word somewhere slightly different, and so does every embedding model.'
pubDate: '31 Aug 2026'
heroImage: ../../assets/blog/same-word-different-meaning.png
---

The other day, I was listening to [Lera Boroditsky](https://en.wikipedia.org/wiki/Lera_Boroditsky), and she said something that caught my attention: *language convinces us, wrongly, that when I say a word and you say the same word, we must be pointing to the same thing*[^1]. Take "freedom". When you use it, it almost certainly does not mean exactly what it means when I use it. The illusion that we are both talking about the same thing is where misunderstanding begins.

## Language is not ideal for communication
When we use language, we are trying to express our own thoughts, or to reconstruct someone else's. But language is not a perfect tool for either job, because no two people learned it in the same context.

Take two siblings: same parents, same house, same language. Even their language is not the same. They had (at least slightly) different experiences, interactions, and points of view. All of that shapes the words they own, so they end up in a situation where the vocabulary overlaps but the meanings behind it do not.

Ask enough people whether a penguin is closer to a chicken or a whale, and the answers settle into ten or more consistent groups: that many quiet versions of one ordinary word. Ask how many others agree with them, and they guess about two thirds. Almost nobody does[^2]. And that is only a penguin; "freedom" has no reason to act differently.

## Lost in translation
Now assume we speak different languages, or think of a bilingual person. Studies suggest that how such a person describes themselves can shift with the language they happen to be using. Spanish–English bilinguals answered the same personality questionnaire in both of their languages; in English, the same people called themselves more outgoing, warmer toward others, and more organized than they did in Spanish[^3]. The effect is modest, an extravert does not become an introvert, but it is there.

Languages also carve up the world in ways that do not line up. Russian has no single word pointing to the color "blue": it forces a choice between *goluboy* (lighter) and *siniy* (darker)[^4], so a Russian speaker cannot mention the color without committing to one or the other.

## Some words smell...
Smell is where this gets most interesting. Ask an English speaker to name a smell and you usually get where it came from ("like a banana") or how they feel about it ("that's disgusting"), and two people rarely give the same answer. Some languages have words for smells themselves, and their speakers name a smell in one word, agreeing with each other about as much as we do about colors[^5].

Arabic has a fun example; the smell: زنخة (zankha). Classical dictionaries record it as the smell of fat or ghee that has turned[^6]. In everyday use it covers the faint, lingering, slightly sulfurous smell that clings to eggs, chicken and raw meat, and it is why a cook reaches for vinegar or lemon before cooking; English has no single word for it and circles it instead with "rank", "funky", "eggy", or just "a bit off"[^7]. The molecules reach every nose equally. What differs is whether your language hands you a word or makes you build an analogy.

## The language space
Something similar happens inside language models. Words, as words, mean nothing to a computer. Before a model can work with them, they have to be transformed in a process called embedding: the embedder turns each word into a vector of numbers, sometimes a few hundred of them, sometimes a few thousand, and those numbers are coordinates in a "language space" where the model can actually compute with meaning.

The standard example goes like this. The word "king" carries something pointing to male and something pointing to royal; "queen" carries something pointing to female and, again, royal. The two vectors sit close together on status and far apart on gender. The arithmetic seems to confirm it: subtract "man" from "king", add "woman", and the nearest word, setting the three inputs aside, is "queen", because a relation like male/female is encoded as a consistent offset in the space[^8]. Nobody assigned those dimensions, so a different training run gives you a different space, where even common words end up with different neighbors[^9].

## Same word, different destination
So two embedders "speaking" the same language will almost certainly disagree about where a word lives, in the same way that you and I disagree about "freedom" while both feeling perfectly understood. Models, like humans, point at different things while using the same word. And in both cases the word itself gives away nothing about the gap.

Maybe, when we talk to each other or to a model, we should assume less and ask more. Feeling understood is not the same as being understood.

<br><br>
**Resources:** <br>

[^1]: What Now? with Trevor Noah (2026). [Lera Boroditsky: How language secretly changes your personality](https://www.youtube.com/watch?v=UVhAceBQmpY).
[^2]: Marti, L., Wu, S., Piantadosi, S. T., & Kidd, C. (2023). [Latent Diversity in Human Concepts](https://doi.org/10.1162/opmi_a_00072). Open Mind, 7.
[^3]: Ramírez-Esparza, N., Gosling, S. D., Benet-Martínez, V., Potter, J. P., & Pennebaker, J. W. (2006). [Do bilinguals have two personalities? A special case of cultural frame switching](https://doi.org/10.1016/j.jrp.2004.09.001). Journal of Research in Personality, 40(2), 99–120.
[^4]: Winawer, J., Witthoft, N., Frank, M. C., Wu, L., Wade, A. R., & Boroditsky, L. (2007). [Russian blues reveal effects of language on color discrimination](https://doi.org/10.1073/pnas.0701644104). PNAS, 104(19), 7780–7785.
[^5]: Majid, A., & Burenhult, N. (2014). [Odors are expressible in language, as long as you speak the right language](https://doi.org/10.1016/j.cognition.2013.11.004). Cognition, 130(2), 266–270.
[^6]: Ibn Manzur. [Lisan al-Arab, root زنخ](https://www.islamweb.net/ar/library/content/122/3592/%D8%B2%D9%86%D8%AE).
[^7]: Taste.com.au. [Science behind 'eggy' smell on clean dishes (and how to get rid of it)](https://www.taste.com.au/taste-test-kitchen/articles/science-behind-eggy-smell-clean-dishes-get-rid/vzx67pq5).
[^8]: Mikolov, T., Yih, W., & Zweig, G. (2013). [Linguistic Regularities in Continuous Space Word Representations](https://aclanthology.org/N13-1090/). NAACL-HLT.
[^9]: Wendlandt, L., Kummerfeld, J. K., & Mihalcea, R. (2018). [Factors Influencing the Surprising Instability of Word Embeddings](https://aclanthology.org/N18-1190/). NAACL-HLT.
