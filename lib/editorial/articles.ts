import { aiAndSkillsArticles } from "./articles-ai-skills";
import { careerAndSecurityArticles } from "./articles-career-security";
import { workplaceAndProfessionArticles } from "./articles-workplace-professions";
import type { Article, PillarSlug } from "./types";

export const articles: Article[] = [
  ...aiAndSkillsArticles,
  ...careerAndSecurityArticles,
  ...workplaceAndProfessionArticles,
].sort((a, b) => a.number - b.number);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByPillar(pillar: PillarSlug) {
  return articles.filter((article) => article.pillar === pillar);
}

export function getRelatedArticles(article: Article, limit = 3) {
  const chosen: Article[] = [];
  const seen = new Set([article.slug]);

  for (const slug of article.relatedSlugs) {
    const related = getArticle(slug);
    if (!related || seen.has(related.slug)) continue;
    chosen.push(related);
    seen.add(related.slug);
    if (chosen.length === limit) return chosen;
  }

  for (const candidate of articles) {
    if (candidate.pillar !== article.pillar || seen.has(candidate.slug)) continue;
    chosen.push(candidate);
    seen.add(candidate.slug);
    if (chosen.length === limit) break;
  }

  return chosen;
}
