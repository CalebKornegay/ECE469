import torch
import torch.nn as nn
import argparse
import sys

parser = argparse.ArgumentParser()
parser.add_argument('--train', action='store_true')
parser.add_argument('--test', action='store_true')
args = parser.parse_args(sys.argv[1:])

# Returns overall accuracy of model
def test_model() -> float:
    print('testing model')
    return float(0)

# Trains the model and exports it
def train_model() -> None:
    print('training model')
    return None

# Do the thing
def main() -> None:
    if args.test == args.train:
        print("You must select either train or test, not neither nor both", flush=True)
        sys.exit(1)

    if args.test:
        test_model()
    elif args.train:
        train_model()

if __name__ == "__main__":
    main()
