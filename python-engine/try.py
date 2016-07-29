from __future__ import print_function, division
import nltk

import os
import random
from collections import Counter
from nltk import word_tokenize, WordNetLemmatizer
from nltk import NaiveBayesClassifier, classify

def init_lists(file):
    with open(file) as f:
    	content = f.readlines()
    return content
def preprocess(sentence):
    lemmatizer = WordNetLemmatizer()
    return [lemmatizer.lemmatize(word.lower()) for word in word_tokenize(str(sentence))]
def get_features(text, setting):
    if setting=='bow':
        return {word: count for word, count in Counter(preprocess(text)).items()}
    else: return {word: True for word in preprocess(text)}
def train(features, samples_proportion):
    train_size = int(len(features) * samples_proportion)
    # initialise the training and test sets
    train_set, test_set = features[:train_size], features[train_size:]
    print ('Training set size = ' + str(len(train_set)) + ' emails')
    print ('Test set size = ' + str(len(test_set)) + ' emails')
    # train the classifier
    classifier = NaiveBayesClassifier.train(train_set)
    return train_set, test_set, classifier
def evaluate(train_set, test_set, classifier):
    # check how the classifier performs on the training and test sets
    print ('Accuracy on the training set = ' + str(classify.accuracy(classifier, train_set)))
    print ('Accuracy of the test set = ' + str(classify.accuracy(classifier, test_set)))
    # check which words are most informative for the classifier
    classifier.show_most_informative_features(20)

# initialise the data
spam = init_lists('spam.rtf')
ham = init_lists('ham.rtf')
all_emails = [(email, 'spam') for email in spam]
all_emails += [(email, 'ham') for email in ham]
random.shuffle(all_emails)
print ('Corpus size = ' + str(len(all_emails)) + ' emails')

# extract the features
all_features = [(get_features(email, ''), label) for (email, label) in all_emails]
print ('Collected ' + str(len(all_features)) + ' feature sets')

# train the classifier
train_set, test_set, classifier = train(all_features, 0.8)

# evaluate its performance
evaluate(train_set, test_set, classifier)

def vardy(something):
    return (classifier.classify(get_features(something, "bow")))

