using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SentimentAnalysis
{
    /// <summary>
    /// Query options for the Sentiment Analysis API
    /// </summary>
    public class SentimentAnalysisQueryOptions
    {
        /// <summary>
        /// The text to analyze the sentiment of
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
