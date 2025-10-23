import { formatDate } from "../../libs/formatDate";
import { Metadata } from "../../types/article";

export const formatArticles = (artilces: Metadata[]): Metadata[] => {
  return artilces.map((article) => ({
    ...article,
    date: formatDate(new Date(article.date)),
  }));
};
